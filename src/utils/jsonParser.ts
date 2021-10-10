export const decodeServiceAccount = (value: string) => JSON.parse(Buffer.from(value, 'base64').toString('ascii'))
