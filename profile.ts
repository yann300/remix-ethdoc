import { PluginProfile, Api } from "@remixproject/plugin-iframe"

export interface Ethdoc extends Api {
  name: 'ethdoc',
  events: {
    newDoc: (doc: string) => void
  }
  methods: {
    getdoc(): string,
  }
}

export const ethdocProfile: PluginProfile<Ethdoc> = {
  name: 'ethdoc',
  methods: ['getdoc'],
  events: ['newDoc'],
  notifications: {
    'solidity': ['compilationFinished']
  },
  url: 'http://localhost:8081'
}
