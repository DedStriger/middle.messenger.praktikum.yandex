import EventBus from "./EventBus";
import * as Handlebars from 'handlebars'

type Meta<T> = {
    tagName: string;
    id: string;
    props: T | object
} | null

type Children = Record<string, Block<any>>

export default class Block<T> {
    
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_RENDER: "flow:render",
      FLOW_CDU: "flow:component-did-update"
    };
  
    _element: HTMLElement | null = null;
    _meta: Meta<T> = null;
    eventBus: () => EventBus
    props: T;

    constructor(tagName = "div", id: string, props = {} as T) {
      const eventBus = new EventBus();
      this._meta = {
        id,
        tagName,
        props
      };
      this.props = this._makePropsProxy(props);
  
      this.eventBus = () => eventBus;
  
      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
  
    _createResources() {
      this._element = this._createDocumentElement(this._meta?.tagName!, this._meta?.id!);
    }
  
    init() {
      this._createResources();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  
    _componentDidMount() {
      this.componentDidMount();
    }

    getFirstRender(){
        return this.getContent().outerHTML;
    }
  
    componentDidMount() {}
  
    dispatchComponentDidMoun() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidUpdate() {
         this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  
  
    setProps = (nextProps) => {
      if (!nextProps) {
        return;
      }
  
      Object.assign(this.props as object, nextProps);
    };
  
    get element() {
      return this._element;
    }
  
    _render() {
      const block = this.render();
      const elem = document.getElementById(this._meta?.id!)
      if(!!elem){
        elem.innerHTML = ''
        elem.innerHTML = block
      }else{
        this._element!.innerHTML = block;
      }
      
    }

    render(): string {
        return ''
    }
  
    getContent(): HTMLElement {
      return this.element!;
    }

  
    _makePropsProxy(props) {
      const self = this;
      return new Proxy(props, {
        get(target: any, prop: string) {
          if (prop.indexOf("_") === 0) {
            throw new Error("нет доступа");
          }
  
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target: any, prop: string, value) {
          target[prop] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU);
          return true;
        },
        deleteProperty() {
          throw new Error("нет доступа");
        }
      });
    }
  
    _createDocumentElement(tagName: string, id: string) {
        const el = document.createElement(tagName)
        el.id = id
      return el;
    }
  
    show() {
      this.getContent().style.display = "block";
    }
  
    hide() {
      this.getContent().style.display = "none";
    }
  }
  