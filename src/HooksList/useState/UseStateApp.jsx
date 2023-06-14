import { CustomCounter } from "./CustomCounter"
import { HookCounter } from "./HookCounter"

export const UseStateApp = () => {
    return (
      <>
          <HookCounter></HookCounter>
          <CustomCounter></CustomCounter>
      </>
    )
}