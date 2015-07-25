"use strict";
let Script = require('fullnode/lib/script');
let Interp = require('fullnode/lib/interp');
let Tx = require('fullnode/lib/tx');
let Hash = require('fullnode/lib/hash');
let Address = require('fullnode/lib/address');

// First, make a blank, fake tx to use for the script interpreter. None of the
// scripts we will make will require an actual transaction, because we will not
// be using OP_CHECKSIG or OP_CHECKMULTISIG. So long as we don't use those
// operations, which hash the transaction, the transaction can be blank.
let tx = Tx();

// Example scripts. Note that while most of the scripts evaluate to true, some
// deliberately evaluate to false.

let script1sig = Script().fromString("OP_1");
let script1pubkey = Script().fromString("");
let verify1 = Interp().verify(script1sig, script1pubkey, tx, 0, 0);
console.log('1.');
console.log('   script sig: ' + script1sig.toString());
console.log('script pubkey: ' + script1pubkey.toString());
console.log('        valid? ' + verify1);
console.log();

let script2sig = Script().fromString("OP_1 OP_1");
let script2pubkey = Script().fromString("");
let verify2 = Interp().verify(script2sig, script2pubkey, tx, 0, 0);
console.log('2.');
console.log('   script sig: ' + script2sig.toString());
console.log('script pubkey: ' + script2pubkey.toString());
console.log('        valid? ' + verify2);
console.log();

let script3sig = Script().fromString("OP_1");
let script3pubkey = Script().fromString("OP_1");
let verify3 = Interp().verify(script3sig, script3pubkey, tx, 0, 0);
console.log('3.');
console.log('   script sig: ' + script3sig.toString());
console.log('script pubkey: ' + script3pubkey.toString());
console.log('        valid? ' + verify3);
console.log();

let script4sig = Script().fromString("OP_0");
let script4pubkey = Script().fromString("");
let verify4 = Interp().verify(script4sig, script4pubkey, tx, 0, 0);
console.log('4.');
console.log('   script sig: ' + script4sig.toString());
console.log('script pubkey: ' + script4pubkey.toString());
console.log('        valid? ' + verify4);
console.log();

let script5sig = Script().fromString("OP_0");
let script5pubkey = Script().fromString("OP_0");
let verify5 = Interp().verify(script5sig, script5pubkey, tx, 0, 0);
console.log('5.');
console.log('   script sig: ' + script5sig.toString());
console.log('script pubkey: ' + script5pubkey.toString());
console.log('        valid? ' + verify5);
console.log();

let script6sig = Script().fromString("OP_0");
let script6pubkey = Script().fromString("OP_1");
let verify6 = Interp().verify(script6sig, script6pubkey, tx, 0, 0);
console.log('6.');
console.log('   script sig: ' + script6sig.toString());
console.log('script pubkey: ' + script6pubkey.toString());
console.log('        valid? ' + verify6);
console.log();

let script7sig = Script().fromString("OP_1");
let script7pubkey = Script().fromString("OP_0");
let verify7 = Interp().verify(script7sig, script7pubkey, tx, 0, 0);
console.log('7.');
console.log('   script sig: ' + script7sig.toString());
console.log('script pubkey: ' + script7pubkey.toString());
console.log('        valid? ' + verify7);
console.log();

let script8sig = Script().fromString("OP_1");
let script8pubkey = Script().fromString("OP_0 OP_TOALTSTACK");
let verify8 = Interp().verify(script8sig, script8pubkey, tx, 0, 0);
console.log('8.');
console.log('   script sig: ' + script8sig.toString());
console.log('script pubkey: ' + script8pubkey.toString());
console.log('        valid? ' + verify8);
console.log();

let script9sig = Script().fromString("OP_1");
let script9pubkey = Script().fromString("OP_0 OP_TOALTSTACK OP_FROMALTSTACK");
let verify9 = Interp().verify(script9sig, script9pubkey, tx, 0, 0);
console.log('9.');
console.log('   script sig: ' + script9sig.toString());
console.log('script pubkey: ' + script9pubkey.toString());
console.log('        valid? ' + verify9);
console.log();

let script10sig = Script().fromString("OP_1");
let script10pubkey = Script().fromString("OP_IF OP_1 OP_ELSE OP_0 OP_ENDIF");
let verify10 = Interp().verify(script10sig, script10pubkey, tx, 0, 0);
console.log('10.');
console.log('   script sig: ' + script10sig.toString());
console.log('script pubkey: ' + script10pubkey.toString());
console.log('        valid? ' + verify10);
console.log();

let script11sig = Script().fromString("OP_0");
let script11pubkey = Script().fromString("OP_IF OP_1 OP_ELSE OP_0 OP_ENDIF");
let verify11 = Interp().verify(script11sig, script11pubkey, tx, 0, 0);
console.log('11.');
console.log('   script sig: ' + script11sig.toString());
console.log('script pubkey: ' + script11pubkey.toString());
console.log('        valid? ' + verify11);
console.log();

let script12sig = Script().fromString("");
let script12pubkey = Script().fromString("OP_RETURN 5 0x0000000000");
let verify12 = Interp().verify(script12sig, script12pubkey, tx, 0, 0);
console.log('12.');
console.log('   script sig: ' + script12sig.toString());
console.log('script pubkey: ' + script12pubkey.toString());
console.log('        valid? ' + verify12);
console.log();

let script13sig = Script().fromString("OP_1 OP_0 OP_DROP");
let script13pubkey = Script().fromString("");
let verify13 = Interp().verify(script13sig, script13pubkey, tx, 0, 0);
console.log('13.');
console.log('   script sig: ' + script13sig.toString());
console.log('script pubkey: ' + script13pubkey.toString());
console.log('        valid? ' + verify13);
console.log();

let script14sig = Script().fromString("OP_1 OP_0 OP_0 OP_2DROP");
let script14pubkey = Script().fromString("");
let verify14 = Interp().verify(script14sig, script14pubkey, tx, 0, 0);
console.log('14.');
console.log('   script sig: ' + script14sig.toString());
console.log('script pubkey: ' + script14pubkey.toString());
console.log('        valid? ' + verify14);
console.log();

let script15sig = Script().fromString("OP_1 OP_0 OP_0 OP_0 OP_2DROP");
let script15pubkey = Script().fromString("");
let verify15 = Interp().verify(script15sig, script15pubkey, tx, 0, 0);
console.log('15.');
console.log('   script sig: ' + script15sig.toString());
console.log('script pubkey: ' + script15pubkey.toString());
console.log('        valid? ' + verify15);
console.log();

let script16sig = Script().fromString("OP_1 OP_0 OP_DUP OP_2DROP");
let script16pubkey = Script().fromString("");
let verify16 = Interp().verify(script16sig, script16pubkey, tx, 0, 0);
console.log('16.');
console.log('   script sig: ' + script16sig.toString());
console.log('script pubkey: ' + script16pubkey.toString());
console.log('        valid? ' + verify16);
console.log();

let script17sig = Script().fromString("OP_1 OP_0 OP_VERIFY OP_1");
let script17pubkey = Script().fromString("");
let verify17 = Interp().verify(script17sig, script17pubkey, tx, 0, 0);
console.log('17.');
console.log('   script sig: ' + script17sig.toString());
console.log('script pubkey: ' + script17pubkey.toString());
console.log('        valid? ' + verify17);
console.log();

let script18sig = Script().fromString("OP_1 OP_1 OP_VERIFY OP_1");
let script18pubkey = Script().fromString("");
let verify18 = Interp().verify(script18sig, script18pubkey, tx, 0, 0);
console.log('18.');
console.log('   script sig: ' + script18sig.toString());
console.log('script pubkey: ' + script18pubkey.toString());
console.log('        valid? ' + verify18);
console.log();

let script19sig = Script().fromString("OP_1 OP_2 OP_OVER OP_1 OP_EQUALVERIFY");
let script19pubkey = Script().fromString("");
let verify19 = Interp().verify(script19sig, script19pubkey, tx, 0, 0);
console.log('19.');
console.log('   script sig: ' + script19sig.toString());
console.log('script pubkey: ' + script19pubkey.toString());
console.log('        valid? ' + verify19);
console.log();

let script20sig = Script().fromString("OP_1 OP_2 OP_3 OP_ROT OP_1 OP_EQUALVERIFY");
let script20pubkey = Script().fromString("");
let verify20 = Interp().verify(script20sig, script20pubkey, tx, 0, 0);
console.log('20.');
console.log('   script sig: ' + script20sig.toString());
console.log('script pubkey: ' + script20pubkey.toString());
console.log('        valid? ' + verify20);
console.log();

let script21sig = Script().fromString("2 0xffff OP_SIZE OP_2 OP_EQUALVERIFY");
let script21pubkey = Script().fromString("");
let verify21 = Interp().verify(script21sig, script21pubkey, tx, 0, 0);
console.log('21.');
console.log('   script sig: ' + script21sig.toString());
console.log('script pubkey: ' + script21pubkey.toString());
console.log('        valid? ' + verify21);
console.log();

let script22sig = Script().fromString("4 0x01000000 4 0x01000000 OP_ADD 1 0x02 OP_EQUAL");
let script22pubkey = Script().fromString("");
let verify22 = Interp().verify(script22sig, script22pubkey, tx, 0, 0);
console.log('22.');
console.log('   script sig: ' + script22sig.toString());
console.log('script pubkey: ' + script22pubkey.toString());
console.log('        valid? ' + verify22);
console.log();

let script23sig = Script().fromString("OP_1 OP_1 OP_ADD OP_2 OP_EQUAL");
let script23pubkey = Script().fromString("");
let verify23 = Interp().verify(script23sig, script23pubkey, tx, 0, 0);
console.log('23.');
console.log('   script sig: ' + script23sig.toString());
console.log('script pubkey: ' + script23pubkey.toString());
console.log('        valid? ' + verify23);
console.log();

let script24sig = Script().fromString("4 0x01010101 4 0x01010101 OP_ADD 4 0x02020202 OP_EQUAL");
let script24pubkey = Script().fromString("");
let verify24 = Interp().verify(script24sig, script24pubkey, tx, 0, 0);
console.log('24.');
console.log('   script sig: ' + script24sig.toString());
console.log('script pubkey: ' + script24pubkey.toString());
console.log('        valid? ' + verify24);
console.log();

let script25sig = Script().fromString("4 0x01010101 4 0x01010101 OP_SUB OP_0 OP_EQUAL");
let script25pubkey = Script().fromString("");
let verify25 = Interp().verify(script25sig, script25pubkey, tx, 0, 0);
console.log('25.');
console.log('   script sig: ' + script25sig.toString());
console.log('script pubkey: ' + script25pubkey.toString());
console.log('        valid? ' + verify25);
console.log();

let script26sig = Script().fromString("4 0x01000000 4 0x00000000 OP_GREATERTHAN OP_1 OP_EQUAL");
let script26pubkey = Script().fromString("");
let verify26 = Interp().verify(script26sig, script26pubkey, tx, 0, 0);
console.log('26.');
console.log('   script sig: ' + script26sig.toString());
console.log('script pubkey: ' + script26pubkey.toString());
console.log('        valid? ' + verify26);
console.log();

let script27sig = Script().fromString("4 0x01000000 4 0x00000000 OP_LESSTHAN OP_0 OP_EQUAL");
let script27pubkey = Script().fromString("");
let verify27 = Interp().verify(script27sig, script27pubkey, tx, 0, 0);
console.log('27.');
console.log('   script sig: ' + script27sig.toString());
console.log('script pubkey: ' + script27pubkey.toString());
console.log('        valid? ' + verify27);
console.log();

let script28sig = Script().fromString("OP_5 OP_4 OP_MAX OP_5 OP_EQUAL");
let script28pubkey = Script().fromString("");
let verify28 = Interp().verify(script28sig, script28pubkey, tx, 0, 0);
console.log('28.');
console.log('   script sig: ' + script28sig.toString());
console.log('script pubkey: ' + script28pubkey.toString());
console.log('        valid? ' + verify28);
console.log();

let script29sig = Script().fromString("OP_5 OP_4 OP_MIN OP_4 OP_EQUAL");
let script29pubkey = Script().fromString("");
let verify29 = Interp().verify(script29sig, script29pubkey, tx, 0, 0);
console.log('29.');
console.log('   script sig: ' + script29sig.toString());
console.log('script pubkey: ' + script29pubkey.toString());
console.log('        valid? ' + verify29);
console.log();

let script30sig = Script().fromString("1 0x00 2 0x0000 OP_NUMEQUAL");
let script30pubkey = Script().fromString("");
let verify30 = Interp().verify(script30sig, script30pubkey, tx, 0, 0);
console.log('30.');
console.log('   script sig: ' + script30sig.toString());
console.log('script pubkey: ' + script30pubkey.toString());
console.log('        valid? ' + verify30);
console.log();

let script31sig = Script().fromString("OP_1 4 0x01000000 OP_EQUAL");
let script31pubkey = Script().fromString("");
let verify31 = Interp().verify(script31sig, script31pubkey, tx, 0, 0);
console.log('31.');
console.log('   script sig: ' + script31sig.toString());
console.log('script pubkey: ' + script31pubkey.toString());
console.log('        valid? ' + verify31);
console.log();

let script32sig = Script().fromString("OP_1 1 0x01 OP_EQUAL");
let script32pubkey = Script().fromString("");
let verify32 = Interp().verify(script32sig, script32pubkey, tx, 0, 0);
console.log('32.');
console.log('   script sig: ' + script32sig.toString());
console.log('script pubkey: ' + script32pubkey.toString());
console.log('        valid? ' + verify32);
console.log();

let script33sig = Script().fromString("OP_0 OP_SHA256 32 0x" + Hash.sha256(new Buffer([])).toString('hex') + " OP_EQUAL");
let script33pubkey = Script().fromString("");
let verify33 = Interp().verify(script33sig, script33pubkey, tx, 0, 0);
console.log('33.');
console.log('   script sig: ' + script33sig.toString());
console.log('script pubkey: ' + script33pubkey.toString());
console.log('        valid? ' + verify33);
console.log();

let script34sig = Script().fromString("OP_0 OP_RIPEMD160 20 0x" + Hash.ripemd160(new Buffer([])).toString('hex') + " OP_EQUAL");
let script34pubkey = Script().fromString("");
let verify34 = Interp().verify(script34sig, script34pubkey, tx, 0, 0);
console.log('34.');
console.log('   script sig: ' + script34sig.toString());
console.log('script pubkey: ' + script34pubkey.toString());
console.log('        valid? ' + verify34);
console.log();

let script35sig = Script().fromString("OP_0 OP_HASH160 20 0x" + Hash.sha256ripemd160(new Buffer([])).toString('hex') + " OP_EQUAL");
let script35pubkey = Script().fromString("");
let verify35 = Interp().verify(script35sig, script35pubkey, tx, 0, 0);
console.log('35.');
console.log('   script sig: ' + script35sig.toString());
console.log('script pubkey: ' + script35pubkey.toString());
console.log('        valid? ' + verify35);
console.log();

let script36sig = Script().fromString("OP_0 OP_HASH256 32 0x" + Hash.sha256sha256(new Buffer([])).toString('hex') + " OP_EQUAL");
let script36pubkey = Script().fromString("");
let verify36 = Interp().verify(script36sig, script36pubkey, tx, 0, 0);
console.log('36.');
console.log('   script sig: ' + script36sig.toString());
console.log('script pubkey: ' + script36pubkey.toString());
console.log('        valid? ' + verify36);
console.log();

let redeemScript37 = Script().fromString('OP_1');
let scriptSig37 = Script().fromString('' + redeemScript37.toBuffer().length + ' 0x' + redeemScript37.toHex());
let address = Address().fromRedeemScript(redeemScript37);
let scriptPubkey37 = address.toScript();
let verify37 = Interp().verify(scriptSig37, scriptPubkey37, tx, 0, Interp.SCRIPT_VERIFY_P2SH);
console.log('37.');
console.log('redeem script: ' + redeemScript37.toString());
console.log('   script sig: ' + scriptSig37.toString());
console.log('script pubkey: ' + scriptPubkey37.toString());
console.log('        valid? ' + verify37);
console.log();
