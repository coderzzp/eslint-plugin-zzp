'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/pangu');

const { RuleTester } = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('pangu 规则单测', rule, {
  valid: [
    // 合法示例
  ],

  invalid: [
    // 不合法示例
    {
      code: '<div>test英文测试</div>',
      errors: [
        {
          message: 'space is needed between Chinese and English/number',
        },
      ],
    },
    {
      code: '<div>111数字测试</div>',
      errors: [
        {
          message: 'space is needed between Chinese and English/number',
        },
      ],
    },
    {
      code: 'const foo = "test声明测试"',
      errors: [
        {
          message: 'space is needed between Chinese and English/number',
        },
      ],
    }
  ],
});
