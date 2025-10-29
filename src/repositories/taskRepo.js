import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function findById(id){
  const n = Number(id);
  if (!Number.isInteger(n) || n < 1) return null;
  return prisma.task.findUnique({ where: { id: n } });
}