import './slider'
import modal from './modules/modal'
import tabs from './modules/tabs'
import forms from './modules/forms'
import changeModalState from './modules/changeModalState'
import timer from './modules/timer'
import image from './modules/image'


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {
        form: 0,
        type: "tree"
    };

    let deadline = '2021-10-22';

    changeModalState(modalState)

    modal();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    image()
});