export interface IVersions {
  node: () => string
  chrome: () => string
  electron: () => string
  ping: () => Promise<string>
}
export interface IApiElectron {
  openFile: () => Promise<any>
}
declare global {
  interface Window {
    api: IApiElectron
    versions: IVersions
  }
}
