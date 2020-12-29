import React from 'react';
import ReactDOM from 'react-dom';
import "./MaskingLayer.less";
import { isWxwork, isMobile } from './../../../utils/util';

const rootId = 'masking-layer-root';

function MaskingLayer(props) {
    const { tips = '', dialogWrapClassName = '' } = props;

    const getTxt = () => {
        if (tips) {
            return (`${tips}`);
        }
        if ( // 企业微信 PC端环境
            isWxwork() && !isMobile()
        ) {
            return ('请选择“在浏览器中打开”');
        } else {
            return ('点击 ··· 并选择“在浏览器中打开”');
        }
    }

    return ( <
        div className = { `masking-layer ${dialogWrapClassName}` }
        style = {
            {
                display: props.show ? 'flex' : 'none'
            }
        }
        onClick = {
            () => {
                MaskingLayer.close();
            }
        } >
        <
        div className = 'msg' >
        <
        span className = 'txt' > {
            getTxt()
        } <
        /span> <
        img className = "logo-img"
        src = "https://meeting.tencent.com/static/imgs/launch-app/arrow.png"
        alt = "logo" / >
        <
        /div> <
        /div>
    );
}

/**
 * 类方法 show
 */
MaskingLayer.show = (options) => {
    const opts = Object.assign({}, {
        id: rootId,
        dialogWrapClassName: '',
        show: true,
    }, options);

    let el = document.getElementById(opts.id);
    if (!el) {
        el = document.createElement('div');
        el.id = opts.id;
        document.body.appendChild(el);
    }
    ReactDOM.render( <
        MaskingLayer {...opts }
        />,
        el
    );
}

/**
 * 类方法 close
 */
MaskingLayer.close = (options) => {
    const opts = Object.assign({}, {
        show: false,
    }, options);
    MaskingLayer.show(opts);
}

export default MaskingLayer;