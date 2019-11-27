import { Helmet } from "react-helmet";

/*	Gelen Html içeriği minify ettikten sonra return ediyor	*/
export const minifyData = (getData) => {
    let setData = getData.replace(/\>\s+\</g, "");
    return setData;
};

export const renderFullPage = ({ html, helmet, initialState }) => {
    return `<!DOCTYPE html><html ${helmet.htmlAttributes.toString()}><head><meta charset="utf-8"><meta name="description" content="Yunus Taşbaşı"><meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">${helmet.title.toString()}${helmet.meta.toString()}<link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="stylesheet" type="text/css" href="/App.css"></head><body ${helmet.bodyAttributes.toString()}><div id="wrapper">${html}</div><script>window.__INITIAL_STATE__ = ${initialState}</script><script type="text/javascript" src="/Assets/js/app.js" defer></script><script type="text/javascript" src="/Assets/js/vendor.js" defer></script></body></html>`;
};
