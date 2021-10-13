export abstract class ObjectRecognition {
  filePath: string

  personCount: number

  constructor(filePath: string) {
    this.filePath = filePath
  }

  abstract detect(): number
}
