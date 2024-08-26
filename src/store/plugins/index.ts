import { PiniaPluginContext } from "pinia";
import { jsonClone } from "@/utils/klona";
import { SetupStoreId } from "@/enum/store";

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