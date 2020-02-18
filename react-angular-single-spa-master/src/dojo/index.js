import singleSpaDojo from 'single-spa-dojo';
import App from './App.ts';
import { v, w } from '@dojo/framework/core/vdom';
import renderer from '@dojo/framework/core/vdom';

const dojoLifecycles = singleSpaDojo({
    renderer,
    v,
    w,
    appComponent: App,
    mountOptions: {
    }
})

export const bootstrap = props => dojoLifecycles.bootstrap(props)

export const mount = props => dojoLifecycles.mount(props)

export const unmount = props => dojoLifecycles.unmount(props)
