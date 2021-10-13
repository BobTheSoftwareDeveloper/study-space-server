export abstract class ObjectRecognition {
  filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
  }

  abstract detect(): Promise<number>
}
