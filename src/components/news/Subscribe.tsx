import React, {
    PropsWithChildren,
    useEffect,
    useState
} from 'react'
import {createPortal} from 'react-dom'

function resizeIframe(iframe: HTMLIFrameElement) {
    if(iframe.contentWindow.document.body?.scrollHeight){
        iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
    }
}

function htmlToElement(html: string) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

export const Subscribe = ({
                                     children,
                                     styleSelector,
                                     title,
                                     ...props
                                 }: PropsWithChildren<{
    styleSelector: string,
    title: string,
}>) => {
    const [contentRef, setContentRef] = useState(null)
    const mountNode = contentRef?.contentWindow?.document.body

    const height = '10px'
    useEffect(() => {
        if (!contentRef) {
            return
        }
        const win = contentRef?.contentWindow
        const linkEls = win.parent.document.querySelectorAll(
            styleSelector
        )
        if (linkEls.length) {
            linkEls.forEach((el: Node) => {
                win.document.head.appendChild(el.cloneNode(true))
            })
        }
        //win.document.write(scriptTag);
        //win.document.write(styleTag);
        setTimeout(() => resizeIframe(contentRef), 100)
        setTimeout(() => resizeIframe(contentRef), 250)
        setTimeout(() => resizeIframe(contentRef), 500)
        setTimeout(() => resizeIframe(contentRef), 1000)
        setInterval(() => resizeIframe(contentRef), 5000)
    }, [contentRef, styleSelector])

    return (
        <iframe  onLoad={(e) => resizeIframe(e.currentTarget)}
                 src={'https://zwiftpower.us20.list-manage.com/subscribe?u=60358aff454334be3e074363f&id=d8e6dbc8d1'}
                 title={title} {...props} ref={setContentRef} width={'100%'} height={'1px'}>



        </iframe>
    )
}
