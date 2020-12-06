import type { RouteProp } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import type { RootState } from './src/store'
import type { Character as CharType } from './src/service/character.service'

declare global {
    type AppNavigationParamSpecs = {
        characters: undefined;
        characterDetail: {
            character: Character
        }
    }

    interface AppScreenProps<S extends keyof AppNavigationParamSpecs> {
        navigation: StackNavigationProp<AppNavigationParamSpecs, S>
        route: RouteProp<AppNavigationParamSpecs, S>
    }
    type AppReduxStore = RootState
    type Character = CharType
}