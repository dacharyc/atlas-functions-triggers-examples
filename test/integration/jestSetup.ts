import { jest } from "@jest/globals";

jest.setTimeout(10000);

global.console = {
  ...global.console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

global.beforeEach(() => {

});