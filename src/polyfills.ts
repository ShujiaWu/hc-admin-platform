/**
 * 标准填充物
 * Created by Yun on 2016/11/10.
 */
import 'ie-shim'; // Internet Explorer 9 support
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
