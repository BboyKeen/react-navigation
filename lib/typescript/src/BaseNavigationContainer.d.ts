import { ParamListBase } from '@react-navigation/routers';
import * as React from 'react';
import type { NavigationContainerProps, NavigationContainerRef } from './types';
/**
 * Container component which holds the navigation state.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * @param props.onInitialRoute Callback which is called with the first navigation state.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
declare const BaseNavigationContainer: React.ForwardRefExoticComponent<NavigationContainerProps & React.RefAttributes<NavigationContainerRef<ParamListBase>>>;
export default BaseNavigationContainer;
//# sourceMappingURL=BaseNavigationContainer.d.ts.map