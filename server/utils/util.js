/**解析node 从mysql去除数据带RowDataPacket的数据 */
const parseData= function (data){ 
    return JSON.parse(JSON.stringify(data))
}

exports.parseData= parseData