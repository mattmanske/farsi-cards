import { get } from 'lodash'

//-----------  Definitions  -----------//

export const tenses = [
  'present',
  'simplePast',
]

export const conjugations = [
  'firstPersonSingular',
  'secondPersonSingular',
  'thirdPersonSingular',
  'firstPersonPlural',
  'secondPersonPlural',
  'thirdPersonPlural',
]

//-----------  Helpers  -----------//

export function getConjugationDefaults(base) {
  const defaults = {}

  const englishBase = get(base, 'english', '');
  const phoneticBase = get(base, 'phonetic', '');
  const farsiBase = get(base, 'farsi', '');

  conjugations.forEach((conjugation) => {
    switch (conjugation) {
      case 'firstPersonSingular':
        return defaults[conjugation] = {
          english  : englishBase && `I ${englishBase}`,
          phonetic : phoneticBase && `${phoneticBase}am`,
          farsi    : farsiBase && `${farsiBase}م`,
        }
      case 'secondPersonSingular':
        return defaults[conjugation] = {
          english  : englishBase && `you ${englishBase}`,
          phonetic : phoneticBase && `${phoneticBase}i`,
          farsi    : farsiBase && `${farsiBase}ی`,
        }
      case 'thirdPersonSingular':
        return defaults[conjugation] = {
          english  : englishBase && `he/she ${englishBase}`,
          phonetic : phoneticBase,
          farsi    : farsiBase,
        }
      case 'firstPersonPlural':
        return defaults[conjugation] = {
          english  : englishBase && `we ${englishBase}`,
          phonetic : phoneticBase && `${phoneticBase}im`,
          farsi    : farsiBase && `${farsiBase}یم`,
        }
      case 'secondPersonPlural':
        return defaults[conjugation] = {
          english  : englishBase && `YOU ${englishBase}`,
          phonetic : phoneticBase && `${phoneticBase}id`,
          farsi    : farsiBase && `${farsiBase}ید`,
        }
      case 'thirdPersonPlural':
        return defaults[conjugation] = {
          english  : englishBase && `they ${englishBase}`,
          phonetic : phoneticBase && `${phoneticBase}and`,
          farsi    : farsiBase && `${farsiBase}ند`,
        }
    }
  })

  return defaults
}