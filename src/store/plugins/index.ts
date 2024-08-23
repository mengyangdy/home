import { PiniaPluginContext } from "pinia";

export function resetSetupStore(context:PiniaPluginContext){
  const setupSyntaxIds=Object.values(SetupStoreId) as string[]
  if(setupSyntaxIds.includes(context.store.$id)){
    const {$state}=context.store
    const defaultStore=jsonClone($state)
    context.store.$reset=()=>{
      context.store.$patch(defaultStore)
    }
  }
}