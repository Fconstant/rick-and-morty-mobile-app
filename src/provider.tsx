import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import AppStore from './store'

import { ApplicationProvider as UIKittenProvider } from "@ui-kitten/components"
import * as eva from "@eva-design/eva"

/**
 * This component is just used to put all the app required providers into a single component
 * So in the end it renders nothing at all
 */
const ProviderCluster: React.FC = (props) => (
  <ReduxProvider store={AppStore}>
    <UIKittenProvider {...eva} theme={eva.dark}>
      {props.children}
    </UIKittenProvider>
  </ReduxProvider>
);

export default ProviderCluster;
