interface Keystore {
    fileSecret: string,
    passwordSecret: string
}

interface TransactionActor {
    alias: string,
    address: string
}

interface TransactionSender extends TransactionActor {
    keystore: Keystore
}

interface RemainingTransactionRestriction {
    remaining: number
}

interface DesiredTransactionRestriction {
    desired: number
}

type TransactionRestriction = RemainingTransactionRestriction | DesiredTransactionRestriction

export interface Transaction {
    sender: TransactionSender,
    receiver: TransactionActor,
    restriction: TransactionRestriction
}


export interface InputConfig {
    transactions: Array<Transaction>,
    wsEndpoint: string,
    logLevel: string
}
