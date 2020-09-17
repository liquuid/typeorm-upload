import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transactionstrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(Transactionstrepository);
    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction Dont exist');
    }
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
