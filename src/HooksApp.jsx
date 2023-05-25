import { UseStateApp } from "./HooksList/useState/UseStateApp"
import { UseEffectApp } from "./HooksList/useEffect/UseEffectApp"
import {ExamplesApp} from './HooksList/examples/ExamplesApp'



export const HooksApp = () => {
    return (
      <>
          <main className="body">
            <h1>Hooks Recopilation by Vinsmake</h1>
            <UseStateApp></UseStateApp>
            <UseEffectApp></UseEffectApp>
            <ExamplesApp></ExamplesApp>
            
          </main>
      </>
    )
}