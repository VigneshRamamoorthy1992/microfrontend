import { WidgetBase } from '@dojo/framework/core/WidgetBase';
import { v } from '@dojo/framework/core/vdom';


export default class App extends WidgetBase {

	protected render() {
		return v('div', {}, ['App worked']);
	}
}
