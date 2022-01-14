declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRISMIC_ENDPOINT: string;
    }
  }
}

export {};
