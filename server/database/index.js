const _0x1a54aa = _0x52e5; (function (_0x356d59, _0x2c3932) { const _0x2bc686 = _0x52e5, _0x5bbf1e = _0x356d59(); while (!![]) { try { const _0x54ab50 = -parseInt(_0x2bc686(0xe3)) / 0x1 * (parseInt(_0x2bc686(0xe1)) / 0x2) + parseInt(_0x2bc686(0xe7)) / 0x3 + -parseInt(_0x2bc686(0xea)) / 0x4 * (parseInt(_0x2bc686(0xf3)) / 0x5) + parseInt(_0x2bc686(0xec)) / 0x6 + parseInt(_0x2bc686(0xe8)) / 0x7 * (parseInt(_0x2bc686(0xef)) / 0x8) + parseInt(_0x2bc686(0xe5)) / 0x9 * (parseInt(_0x2bc686(0xe0)) / 0xa) + parseInt(_0x2bc686(0xe2)) / 0xb * (-parseInt(_0x2bc686(0xeb)) / 0xc); if (_0x54ab50 === _0x2c3932) break; else _0x5bbf1e['push'](_0x5bbf1e['shift']()); } catch (_0x437fce) { _0x5bbf1e['push'](_0x5bbf1e['shift']()); } } }(_0x441c, 0x7fda2)); const mysql2 = require('mysql2'); function _0x441c() { const _0xa8c119 = ['4HQDqaB', '45624rdfCbx', '303516nwHqId', 'dotenv', 'exports', '1499608PEePIQ', 'DB_PASSWORD', 'localhost', 'env', '3687485JAabWp', 'query', 'DB_USERNAME', 'UPDATE\x20numbers\x20SET\x20status\x20=\x20\x27', '50YoHfxh', '4FqUBim', '1628YpEFNN', '1499AhDLTP', '\x27\x20WHERE\x20body\x20=\x20', '1321371cISavv', 'DB_PORT', '2564223MvgrLy', '7RKeNdt', 'createPool']; _0x441c = function () { return _0xa8c119; }; return _0x441c(); } function _0x52e5(_0x254976, _0x497ef7) { const _0x441c54 = _0x441c(); return _0x52e5 = function (_0x52e582, _0x5c609b) { _0x52e582 = _0x52e582 - 0xdf; let _0x4032c3 = _0x441c54[_0x52e582]; return _0x4032c3; }, _0x52e5(_0x254976, _0x497ef7); } require(_0x1a54aa(0xed))['config'](); const db = mysql2[_0x1a54aa(0xe9)]({ 'host': _0x1a54aa(0xf1), 'user': process[_0x1a54aa(0xf2)][_0x1a54aa(0xf5)], 'database': process['env']['DB_DATABASE'], 'password': process[_0x1a54aa(0xf2)][_0x1a54aa(0xf0)], 'port': process[_0x1a54aa(0xf2)][_0x1a54aa(0xe6)], 'waitForConnections': !![], 'connectionLimit': 0xa, 'queueLimit': 0x0 }), setStatus = (_0x381a55, _0x4248d3) => { const _0xa821fe = _0x1a54aa; try { return db[_0xa821fe(0xf4)](_0xa821fe(0xdf) + _0x4248d3 + _0xa821fe(0xe4) + _0x381a55 + '\x20'), !![]; } catch (_0x3e9c31) { return ![]; } }; function dbQuery(_0x333c46) { return new Promise(_0x3ddb40 => { const _0x252fed = _0x52e5; db[_0x252fed(0xf4)](_0x333c46, (_0x3787c5, _0x4fdb28) => { if (_0x3787c5) throw _0x3787c5; try { _0x3ddb40(_0x4fdb28); } catch (_0x299d91) { _0x3ddb40({}); } }); }); } module[_0x1a54aa(0xee)] = { 'setStatus': setStatus, 'dbQuery': dbQuery, 'db': db };