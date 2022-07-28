export const docVersions = ['2.0.0', '2.1.0', '2.2.0-alpha'] as const;

export const githubDocsUrl =
  'https://github.com/devfile/devfile-web/tree/main/apps/landing-page/pages';

export type DocVersions = typeof docVersions[number];

export interface Section {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

export type VersionedDocsNavigation = Section[];

export interface DocsNavigation extends Record<DocVersions, VersionedDocsNavigation> {
  defaultVersion: DocVersions;
}
