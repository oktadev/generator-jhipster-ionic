import { beforeAll, describe, expect, it } from 'vitest';

import { defaultHelpers as helpers, result } from 'generator-jhipster/testing';

const SUB_GENERATOR = 'app';
const BLUEPRINT_NAMESPACE = `jhipster:${SUB_GENERATOR}`;

describe('SubGenerator app of ionic JHipster blueprint', () => {
  describe('run', () => {
    beforeAll(async function () {
      await helpers
        .run(BLUEPRINT_NAMESPACE)
        .withJHipsterConfig({
          // Skip server and client for speed
          skipServer: true,
          skipClient: true,
        })
        .withOptions({
          ignoreNeedlesError: true,
          blueprint: 'ionic',
        })
        .withJHipsterLookup()
        .withParentBlueprintLookup();
    });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).toMatchSnapshot();
    });
  });

  describe('with custom ionic path', () => {
    beforeAll(async function () {
      await helpers
        .run(BLUEPRINT_NAMESPACE)
        .withJHipsterConfig({
          // Skip server and client for speed
          skipServer: true,
          skipClient: true,
        })
        .withOptions({
          skipChecks: true,
          ignoreNeedlesError: true,
          blueprint: 'ionic',
          ionicDir: '../ionic-app',
        })
        .withJHipsterLookup()
        .withParentBlueprintLookup();
    });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).toMatchSnapshot();
    });

    it('generates a package.json file at custom folder', () => {
      result.assertFile(['../ionic-app/package.json']);
    });
  });
});
