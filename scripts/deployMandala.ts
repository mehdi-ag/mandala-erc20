const { ethers } = require("hardhat");
import { deployAndWait, doTxAndWait, gasConfig, gasConfig2, gasConfig3, gasConfig4,} from './utils/mandala_helper';
async function main() {
    const [deployer] = await ethers.getSigners();
    const erc20 = await deployAndWait('MyERC20', ['2000000000000000', gasConfig3])
    const totalSupply = await erc20.totalSupply();
    console.log({ totalSupply: +totalSupply });
    const res = await doTxAndWait('transfer() to same user', async () =>
        await erc20.connect(deployer).transfer(deployer.address, 1, gasConfig
        ));
    console.log(res);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

