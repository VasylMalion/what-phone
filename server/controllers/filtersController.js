// models
import Phone from "../models/Phone";

const filters = async (req, res) => {

    const {filters} = req.body
    const phones = await Phone.find()

    // Діагональ
    let withDiagonal = phones
    if (filters[0] && filters[1]) {
        withDiagonal = phones.filter( phone => {
            return phone.diagonal >= +filters[0] && phone.diagonal <= +filters[1]
        }) } else if (!filters[0] && filters[1]) {
        withDiagonal = phones.filter( phone => {
            return phone.diagonal <= +filters[1]
        })
    } else if (filters[0] && !filters[1]) {
        withDiagonal = phones.filter( phone => {
            return phone.diagonal >= +filters[0]
        })
    }

    // Внутрішня пам'ять
    let withMemory = withDiagonal
    if (filters[2] && filters[3]) {
        withMemory = withDiagonal.filter( phone => {
            return phone.internalMemory >= +filters[2] && phone.internalMemory <= +filters[3]
        }) } else if (!filters[2] && filters[3]) {
        withMemory = withDiagonal.filter( phone => {
            return phone.internalMemory <= +filters[3]
        })
    } else if (filters[2] && !filters[3]) {
        withMemory = withDiagonal.filter( phone => {
            return phone.internalMemory >= +filters[2]
        })
    }

    // Вартість
    let withPrice = withMemory
    if (filters[4] && filters[5]) {
        withPrice = withMemory.filter( phone => {
            return phone.cost >= +filters[4] && phone.cost <= +filters[5]
        }) } else if (!filters[4] && filters[5]) {
        withPrice = withMemory.filter( phone => {
            return phone.cost <= +filters[5]
        })
    } else if (filters[4] && !filters[5]) {
        withPrice = withMemory.filter( phone => {
            return phone.cost >= +filters[4]
        })
    }

    // Оперативна пам'ять
    let withRAM = withPrice
    if (filters[6] && filters[7]) {
        withRAM = withPrice.filter( phone => {
            return phone.RAM >= +filters[6] && phone.RAM <= +filters[7]
        }) } else if (!filters[6] && filters[7]) {
        withRAM = withPrice.filter( phone => {
            return phone.RAM <= +filters[7]
        })
    } else if (filters[6] && !filters[7]) {
        withRAM = withPrice.filter( phone => {
            return phone.RAM >= +filters[6]
        })
    }

    // Камера
    let withCamera = withRAM
    if (filters[8] && filters[9]) {
        withCamera = withRAM.filter( phone => {
            return phone.camera >= +filters[8] && phone.camera <= +filters[9]
        }) } else if (!filters[8] && filters[9]) {
        withCamera = withRAM.filter( phone => {
            return phone.camera <= +filters[9]
        })
    } else if (filters[8] && !filters[9]) {
        withCamera = withRAM.filter( phone => {
            return phone.camera >= +filters[8]
        })
    }

    // Фронтальна камера
    let withFrontCamera = withCamera
    if (filters[10] && filters[11]) {
        withFrontCamera = withCamera.filter( phone => {
            return phone.frontCamera >= +filters[10] && phone.frontCamera <= +filters[11]
        }) } else if (!filters[10] && filters[11]) {
        withFrontCamera = withCamera.filter( phone => {
            return phone.frontCamera <= +filters[11]
        })
    } else if (filters[10] && !filters[11]) {
        withFrontCamera = withCamera.filter( phone => {
            return phone.frontCamera >= +filters[10]
        })
    }

    // Батарея
    let withBattery = withFrontCamera
    if (filters[12] && filters[13]) {
        withBattery = withFrontCamera.filter( phone => {
            return phone.batteryCapacity >= +filters[12] && phone.batteryCapacity <= +filters[13]
        }) } else if (!filters[12] && filters[13]) {
        withBattery = withFrontCamera.filter( phone => {
            return phone.batteryCapacity <= +filters[13]
        })
    } else if (filters[12] && !filters[13]) {
        withBattery = withFrontCamera.filter( phone => {
            return phone.batteryCapacity >= +filters[12]
        })
    }

    // SIM
    let withSIM = withBattery
    if (filters[14] && filters[15]) {
        withSIM = withBattery.filter( phone => {
            return phone.countOfSIM >= +filters[14] && phone.countOfSIM <= +filters[15]
        }) } else if (!filters[14] && filters[15]) {
        withSIM = withBattery.filter( phone => {
            return phone.countOfSIM <= +filters[15]
        })
    } else if (filters[14] && !filters[15]) {
        withSIM = withBattery.filter( phone => {
            return phone.countOfSIM >= +filters[14]
        })
    }

    // core
    let withCore = withSIM
    if (filters[16] && filters[17]) {
        withCore = withSIM.filter( phone => {
            return phone.countOfCore >= +filters[16] && phone.countOfCore <= +filters[17]
        }) } else if (!filters[16] && filters[17]) {
        withCore = withSIM.filter( phone => {
            return phone.countOfCore <= +filters[17]
        })
    } else if (filters[16] && !filters[17]) {
        withCore = withSIM.filter( phone => {
            return phone.countOfCore >= +filters[16]
        })
    }

    res.send(withCore)

}

export {
    filters
}