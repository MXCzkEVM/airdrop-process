import {MXCAddressesModel} from "../models/mxc_addresses";
import {MXCL2Provider} from "../const/network";
import {addresses} from "./index";

export default async function(gtNum: number, cb: (address: string) => Promise<void>) {
    for(let i = 0; i < addresses.length; i++) {
        const count = await MXCL2Provider.getTransactionCount(addresses[i].get().address)
        if(count >= gtNum) {
            await cb(addresses[i].get().address);
        }
    }
}