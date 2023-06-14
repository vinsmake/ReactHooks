import { UseStateApp } from "./HooksList/useState/UseStateApp"
import { UseEffectApp } from "./HooksList/useEffect/UseEffectApp"
import {ExamplesApp} from './HooksList/examples/ExamplesApp'
import { UseRefApp } from "./HooksList/useRef/UseRefApp"
import { LayoutEffect } from "./HooksList/useLayoutEffect/LayoutEffect"
import { UseMemoApp } from "./HooksList/useMemo/UseMemoApp";
import { UseCallbackApp } from "./HooksList/useCallback/UseCallbackApp"
import { UseReducerApp } from "./HooksList/useReducer/UseReducerApp"
import { UseContextApp } from "./HooksList/useContext/UseContextApp"



export const HooksApp = () => {
    return (
      <>
          <main className="body">
            <h1>Hooks Recopilation by Vinsmake</h1>
            <UseStateApp/>
            <UseEffectApp/>
            <ExamplesApp/>
            <UseRefApp/>
            <LayoutEffect/>
            <UseMemoApp/>
            <UseCallbackApp/>
            <UseReducerApp/>
            <UseContextApp/>
          </main>
      </>
    )
}