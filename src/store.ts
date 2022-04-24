import { get } from "svelte/store";
import type ImageFile from "./models/ImageFile";
import { wIDatabase, wStorage } from "./writable-stores";

export const labelsStr = (function () {
    const storage = wStorage('labels_string', '');

    return {
        ...storage,
        getLabels: function () {
            let s = get(storage);
            if(!s) return [];
            const separators = " ,;";
            const reg = RegExp(`[${separators}]`);
            return s.split(reg).filter(lab => lab.trim().length > 0);
        }
    }
})();

export const dataIndex = wStorage('data_index', 0);

export const images = wIDatabase<ImageFile[]>('image_dataset', null);