"use strict";

const chalk = require("chalk");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

// Pastel soft color scheme
console.log(
  chalk.hex('#B5EAD7')(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + '\n' +
  chalk.hex('#C7CEEA')('╔╗╔═╦═══╦╗──╔╦════╦═══╦═╗─╔╗') + '\n' +
  chalk.hex('#FFDAC1')('║║║╔╣╔═╗║╚╗╔╝╠══╗═║╔══╣║╚╗║║') + '\n' +
  chalk.hex('#E2F0CB')('║╚╝╝║║─║╠╗╚╝╔╝─╔╝╔╣╚══╣╔╗╚╝║') + '\n' +
  chalk.hex('#FFB7B2')('║╔╗║║╚═╝║╚╗╔╝─╔╝╔╝║╔══╣║╚╗║║') + '\n' +
  chalk.hex('#AEDFF7')('║║║╚╣╔═╗║─║║─╔╝═╚═╣╚══╣║─║║║') + '\n' +
  chalk.hex('#D8B4FE')('╚╝╚═╩╝─╚╝─╚╝─╚════╩═══╩╝─╚═╝') + '\n' +
  chalk.hex('#A0E7E5')(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
);

// Teks dengan warna pastel berbeda
console.log(
  '\n' +
  chalk.hex('#FF9AA2').bold.italic('     T H A N K S   F O R   U S I N G\n') +
  chalk.hex('#FFB347').bold.italic('           M Y   B A I L E Y S ♡\n\n') +
  chalk.hex('#AEC6CF').italic('     last updated • 10 January 2026\n') +
  chalk.hex('#B39EB5').bold('     Modification by @kayzennotdev\n') +
  chalk.hex('#77DD77').bold('           telegram: @kayzennotdev\n\n') +
  chalk.hex('#F49AC2').italic('          ⋆ ˚ ✧ ₊ ˚ ෆ\n')
);
// ============================
// FIXED __createBinding
// ============================

var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (
          !desc ||
          (!("get" in desc) && (desc.writable || desc.configurable))
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }

        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
