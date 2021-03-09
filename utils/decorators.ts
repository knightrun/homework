import { createDecorator } from 'vue-class-component'

export const Functional = (options: boolean) => {
    return createDecorator((componentOptions, key) => {
        if (!Array.isArray(componentOptions[key])) {
            componentOptions[key] = options
        }
    })
}