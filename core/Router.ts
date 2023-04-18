import Block from "./Block";
import isEqual from '../utils/isEqual'
import { ALL_LINK, NOT_FOUND_LINK } from "../utils/links";

function render(query: string, block: Block<any>) {
    const root = document.querySelector(query);
    root!.innerHTML = block.getFirstRender();
    return root;
  }

class Route {
    _pathname = ''
    _blockClass:  any = null
    _block: Block<any> | null = null
    _props: any = {}
    constructor(pathname: string, view: Block<any>, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block && this._blockClass !== null) {
            this._block = new this._blockClass(this._props);
            render(this._props.rootQuery, this._block!);
            return;
        }

        this._block!.show();
    }
}

export default class Router {
    _rootQuery = ''
    history = window.history
    _currentRoute: Route | null = null
    routes: Route[] = []
    __instance: Router | null = null;
  constructor(rootQuery: string) {
    if (this.__instance) {
        return this.__instance;
      }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.__instance = this
  }

  use<T>(pathname: string, block: T, props: any) {
    const route = new Route(pathname, block as Block<any>, { rootQuery: this._rootQuery, ...props },);
    this.routes.push(route);
    return this;
  }

  start() {
      window.onpopstate = (event: PopStateEvent) => {
        const path = (event.currentTarget as Window).location.pathname
        this._checkUnexistRoute(path)
      this._onRoute(path);
    };
    this._checkUnexistRoute(window.location.pathname)
    this._onRoute(window.location.pathname);
  }

  _checkUnexistRoute(pathname: string){
    if(!ALL_LINK.includes(pathname)){
        this.go(NOT_FOUND_LINK)
     }
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route && this._currentRoute) {
      this._currentRoute.leave();
    }

    if(this._currentRoute){
        this._currentRoute.leave()
    }

    this._currentRoute = route!;
    route && route.render();
  }

  go(pathname: string) {
     this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
