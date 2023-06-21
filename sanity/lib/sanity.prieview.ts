"use client"

import {definePreview} from "next-sanity/preview"
import { projectId,dataset } from "../env"

function onPublicAccessOnly(){
    throw new Error (`Unable to load preview as you're not loggede in`);

}
export const usePreview=definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});

