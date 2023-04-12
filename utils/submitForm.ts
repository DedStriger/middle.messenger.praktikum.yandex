export const submitForm = (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    if(form.querySelector('input.error')){
        return;
    }
    const formData = new FormData(form);
    formData.forEach(i => console.log(i))
 }
