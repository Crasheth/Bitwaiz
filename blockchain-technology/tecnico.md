# Blockchain: เทคโนโลยีพื้นฐานสำหรับการจัดเก็บข้อมูลแบบกระจายศูนย์

> Ci sono solo due industrie che chiamano i propri clienti 'utenti': la droga e il software. — Edward Tufte.























La blockchain è un registro digitale, immutabile e distribuito che registra le transazioni in blocchi collegati tra loro in modo crittografico.  [Blockchain technology](https://en.wikipedia.org/wiki/Blockchain_technology)  ระบบนี้ใช้ในปัจจุบันอย่างแพร่หลายสำหรับการจัดเก็บข้อมูลและการทำธุรกรรมที่ต้องการความน่าเชื่อถือและความโปร่งใสสูง  โครงสร้างพื้นฐานของ blockchain ประกอบด้วย nodes (โหนด) จำนวนมากที่กระจายอยู่ทั่วโลก ซึ่งแต่ละโหนดเก็บสำเนาของบล็อกเชนทั้งหมด ทำให้มั่นใจได้ถึงความทนทานต่อความผิดพลาดและความปลอดภัย

การทำงานหลักของ blockchain คือการใช้ cryptographic hash เพื่อเชื่อมโยงบล็อกแต่ละบล็อกเข้าด้วยกัน บล็อกแต่ละบล็อกประกอบด้วยข้อมูลธุรกรรม (transaction data)  แฮชของบล็อกก่อนหน้า และ timestamp  เมื่อมีการสร้างบล็อกใหม่  แฮชของบล็อกก่อนหน้าจะถูกรวมเข้ากับบล็อกใหม่ ทำให้การเปลี่ยนแปลงข้อมูลในบล็อกใดบล็อกหนึ่งเป็นไปไม่ได้โดยไม่ถูกตรวจพบ  การทำงานนี้ถูกทำให้เป็นไปโดย consensus mechanism ซึ่งเป็นกลไกที่ใช้โดย nodes ในเครือข่ายเพื่อตกลงกันว่าบล็อกใหม่ใดที่ควรถูกเพิ่มเข้าไปใน blockchain

**การใช้งานหลักของ Blockchain:**

*   **สกุลเงินดิจิทัล (Cryptocurrencies):** เช่น Bitcoin และ Ethereum ซึ่งใช้ blockchain เพื่อบันทึกธุรกรรมและการกระจายการควบคุมไปยังผู้ใช้
*   **Supply Chain Management:** การติดตามสินค้าและบริการจากแหล่งที่มาจนถึงผู้บริโภค
*   **การจัดการเอกสาร (Document Management):** การบันทึกและจัดการเอกสารอย่างปลอดภัยและโปร่งใส
*   **การลงคะแนนเสียงอิเล็กทรอนิกส์ (Electronic Voting):** การสร้างระบบลงคะแนนเสียงที่โปร่งใสและตรวจสอบได้
*   **การจัดการข้อมูลสุขภาพ (Healthcare Data Management):** การจัดเก็บและแบ่งปันข้อมูลสุขภาพของผู้ป่วยอย่างปลอดภัย

**ข้อดีของ Blockchain:**

*   **ความโปร่งใส (Transparency):** ทุกธุรกรรมบน blockchain จะถูกบันทึกไว้และสามารถตรวจสอบได้
*   **ความปลอดภัย (Security):** การใช้ cryptography และ consensus mechanism ช่วยให้มั่นใจได้ถึงความปลอดภัยของข้อมูล
*   **ความน่าเชื่อถือ (Trustworthiness):** การกระจายศูนย์และการตรวจสอบได้ช่วยลดความจำเป็นในการเชื่อถือบุคคลกลาง
*   **ประสิทธิภาพ (Efficiency):** ลดขั้นตอนการทำธุรกรรมและค่าใช้จ่ายที่เกี่ยวข้อง

**ข้อควรพิจารณา (Considerations):**

*   **Scalability:** blockchain บางประเภทอาจมีข้อจำกัดในการรองรับปริมาณธุรกรรมจำนวนมาก
*   **Regulatory Uncertainty:** กฎระเบียบเกี่ยวกับ blockchain และ cryptocurrencies ยังอยู่ในช่วงเริ่มต้นของการพัฒนา
*   **Energy Consumption:** บาง consensus mechanism (เช่น Proof-of-Work) ใช้พลังงานจำนวนมาก


![blockchain technology](https://static.vecteezy.com/system/resources/previews/011/494/437/original/blockchain-technology-isometric-flat-illustration-concept-hi-tech-block-chain-data-structure-visualization-vector.jpg)
























## Fonti

- [Blockchain technology](https://en.wikipedia.org/wiki/Blockchain_technology)
- [Blockchain - Wikipedia](https://en.wikipedia.org/wiki/Blockchain)
- [Decentralized Applications: Harnessing Bitcoin's Blockchain Technology (book)](https://grokipedia.com/page/decentralized_applications_harnessing_bitcoins_blockchain_technology_(book)
- [Blockchain: What It Is, How It Works, Why It Matters | Built In](https://builtin.com/blockchain)