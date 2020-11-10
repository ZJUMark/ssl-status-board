const knownLogos = new Map([
    ['Test', require('@/assets/logos/test.png')],
    ['ZJUNlict', require('@/assets/logos/zjunlict.png')],
    ['SRC赛队', require('@/assets/logos/src.png')],
    ['编译错误', require('@/assets/logos/bycw.png')],
    ['StepForwards', require('@/assets/logos/step.png')],
    ['简单难度的电脑', require('@/assets/logos/jdnd.png')],
    ['江苏海洋大学1队', require('@/assets/logos/jshy.png')],
    ['黄河1号', require('@/assets/logos/hhyh.png')],
    ['CUGB', require('@/assets/logos/cugb.png')],
    ['CUGB2', require('@/assets/logos/cugb.png')],
    ['空指针异常', require('@/assets/logos/null.png')],
    ['ZJUTKnights', require('@/assets/logos/zjutk.png')],
    ['请求超时', require('@/assets/logos/qqcs.png')]
]);

import defaultLogo from '@/assets/logos/no-logo.png';

const teamLogoUrl = function (teamName) {
    const logoBaseName = teamName;
    const logoPath = knownLogos.get(logoBaseName);
    if (logoPath !== undefined) {
        return logoPath;
    }
    return defaultLogo;
};

export default teamLogoUrl;
