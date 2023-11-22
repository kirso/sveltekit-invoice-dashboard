
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

try {
	await prisma.user.upsert({
		where: { email: 'alice@prisma.io' },
		update: {},
		create: {
			email: 'alice@prisma.io',
			name: 'Alice',
			password: '12345'
		}
	});
	await prisma.$disconnect;
} catch (err) {
	console.error(err);
	await prisma.$disconnect();
	process.exit(1);
}
