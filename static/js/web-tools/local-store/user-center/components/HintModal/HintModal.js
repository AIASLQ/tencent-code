/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal, Button } from '@tencent/tea-component';
import './HintModal.less';

function prepareDom(id = 'el-auth-code-block-modal') {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('div');
        el.id = id;
        document.body.appendChild(el);
    }
    return el;
}

function HintModal(props) {
    const [visible, setVisible] = useState(props.show);
    const close = () => {
        HintModal.close();
        const { closeCallback } = props;
        if (closeCallback) {
            closeCallback();
        }
    };

    const handleClickSure = () => {
        props.sureCb && props.sureCb();
        close();
    }

    useEffect(() => {
        setVisible(props.show);
    }, [props.show]);

    return ( <
        >
        <
        Modal visible = { visible }
        caption = { props.title }
        onClose = { close }
        className = 'auth-code-hint-modal' >
        <
        Modal.Body > { props.content } < /Modal.Body> <
        Modal.Footer > {
            props.showCancelBtn ?
            < Button type = "weak"
            onClick = { close }
            style = {
                { width: '88px' } } >
            知道了 <
            /Button> :
                null
        } <
        Button type = "primary"
        onClick = { handleClickSure }
        style = {
            { width: '88px' } } > { props.sureTxt } <
        /Button> <
        /Modal.Footer> <
        /Modal> <
        />
    );
}

HintModal.showModal = (options = {}) => {
    const { title = '', content = '', closeCallback, sureCb, sureTxt = '', showCancelBtn = false } = options;
    const el = prepareDom();
    ReactDOM.render( <
        HintModal title = { title }
        content = { content }
        show = { true }
        closeCallback = { closeCallback }
        sureCb = { sureCb }
        sureTxt = { sureTxt }
        showCancelBtn = { showCancelBtn }
        />,
        el);
};

HintModal.close = () => {
        const el = prepareDom();
        ReactDOM.render( < HintModal title = { '' }
            content = { '' }
            show = { false }
            sureTxt = { '' }
            showCancelBtn = { false }
            />, el);
        };

        HintModal.propTypes = {
            showCancelBtn: PropTypes.bool,
            show: PropTypes.bool,
            title: PropTypes.string,
            content: PropTypes.string,
            sureTxt: PropTypes.string,
            closeCallback: PropTypes.func,
            sureCb: PropTypes.func,
        };

        export default HintModal;