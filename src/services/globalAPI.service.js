import { guidGenerator as newId } from "../helpers/";
import headerData from "../data/header.data";
import footerData from "../data/footer.data";

const GLOBAL_API = {
  getHeaderData () {
    let data = headerData;
    headerData.navItems.forEach((elm) => {
      elm.id = newId()
    })
    return data;
  },
  getFooterData () {
    let data = footerData;
    return data;
  },
}

export default GLOBAL_API;