import * as _eslintConfigIsotropic from '../js/eslint-config-isotropic.js';
import _chai from 'chai';
import _mocha from 'mocha';

_mocha.describe('eslint-config-isotropic', () => {
    _mocha.it('should be a shared eslint config object', () => {
        _chai.expect(_eslintConfigIsotropic).to.be.an('object');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('ecmaFeatures');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('env');
        _chai.expect(_eslintConfigIsotropic).to.have.property('globals').that.is.an('object');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('parserOptions');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('root');
        _chai.expect(_eslintConfigIsotropic).to.have.property('rules').that.is.an('object');

        Object.keys(_eslintConfigIsotropic.rules).forEach(ruleName => {
            let setting = _eslintConfigIsotropic.rules[ruleName];

            if (Array.isArray(setting)) {
                setting = setting[0];
            }

            _chai.expect(setting).to.be.oneOf([
                'error',
                'off',
                'warn'
            ]);
        });
    });
});
