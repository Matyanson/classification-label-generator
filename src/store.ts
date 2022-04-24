import { get } from "svelte/store";
import { wIDatabase, wStorage } from "./writable-stores";

export const labelsStr = (function () {
    const storage = wStorage('labels_string', '');

    return {
        ...storage,
        getLabels: function () {
            let s = get(storage);
            const separators = " ,;";
            const reg = RegExp(`[${separators}]`);
            return s.split(reg).filter(lab => lab.trim().length > 0);
        }
    }
})();

export const images = wIDatabase('image_dataset', null);