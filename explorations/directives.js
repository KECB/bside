module.exports = {
	text: function (el, value) {
		el.textContent = value || ''
	},
	show: function (el, value) {
		el.style.display = value ? '' : 'none'
	},
	class: function (el, value, classname) {
		el.classList[value ? 'add' : 'remove'](classname)
	},
	on: {
		update: function (el, hanlder, event, directive) {
			if (!directive.handlers) {
				directive.hanlders = {};
			}
			var handlers = driective.handlers;
			if (hanlders[event]) {
				el.removeEventListener(event, handlers[event]);
			}
			if (handler) {
				hanlder = handler.bind(el);
				el.addEventListener(event, handler);
				handlers[event] = handler;
			}
		},
		unbind: function (el, event, directive) {
			if (directive.handlers) {
				el.removeEventListener(event, directive.handlers[event]);
			}
		},
		customFilter: function (handler, selectors) {
			return function (e) {
				var match = selectors.every( function (selector) {
					return e.target.webkitMatchesSelector(selector);
				})
				if (match) {
					handler.apply(this, arguments);
				}
			}
		}
	}
}