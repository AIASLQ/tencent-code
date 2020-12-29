/**
 * 将文字转为图片
 * @param {*} param0 -
 */
export const convertTextToImg = ({
    txt = '',
    fsize = 40, // 图片中字体的大小
    canvasWidth = 120,
    canvasHeight = 120,
    // 设置字体的位置
    fillTextX = 60,
    fillTextY = 60,
}) => {
    const fontWeight = 'bold';

    const canvas = document.createElement('canvas');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext('2d');
    // 设置文字背景颜色
    context.fillStyle = '#006FFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // 设置文字颜色
    context.fillStyle = '#FFF';
    context.font = fontWeight + ' ' + fsize + 'px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    /**
     * context.fillText(text, x, y, maxWidth);
     * @param txt - 规定在画布上输出的文本。
     * @param x - 开始绘制文本的 x 坐标位置（相对于画布）。
     * @param y - 开始绘制文本的 y 坐标位置（相对于画布）。
     */
    context.fillText(txt, fillTextX, fillTextY);

    // canvas.style.display = 'none';
    // document.body.appendChild(canvas);

    return canvas.toDataURL('image/png');
}