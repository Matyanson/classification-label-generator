<script lang="ts">
    import type ImageFile from "../../models/ImageFile";
    import { images } from "../../store";


    function readImage(file: File):  Promise<ImageFile>{
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                if(typeof(reader.result) == "string"){
                    const img: ImageFile = { name: file.name, url: reader.result };
                    resolve(img);
                } else
                    reject();
            }
        });
    }

    const onUpload = async (e: Event) => {
        const target = e.target as HTMLInputElement;
        const { files } = target;

        const promises: Promise<ImageFile>[] = [];

        for(const file of files) {
            promises.push(readImage(file));
        }

        const imgFiles = await Promise.all(promises);
        $images = imgFiles;
    }

</script>

upload your dataset:
<input type="file" multiple={true} accept="image/*" on:change={onUpload} />