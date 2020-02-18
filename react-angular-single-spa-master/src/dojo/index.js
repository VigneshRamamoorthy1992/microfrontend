import singleSpaDojo from 'single-spa-dojo';
import App from './App.ts';
import { v, w } from '@dojo/framework/core/vdom';
import renderer from '@dojo/framework/core/vdom';

const reactLifecycles = singleSpaDojo({
    renderer,
    v,
    w,
    appComponent: App,
    mountOptions: {
    }
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
