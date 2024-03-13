import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        
        List<User> lista = new ArrayList<User>();

        Leader cesar = new Leader("Cesar", "Glufke Zanellato", "cesar@gmail.com", "Cesar123", true, "Time Cesar");

        User luigi = new User("Luigi", "dos Santos Bernardo", "luigi@gmail.com", "Luigi123");

        ParkAddress zonaNorte = new ParkAddress("Floripa", "Santa Catarina", "Brasil", "ZonaNorte", 15.0f, 18.5f);

        lista.add(cesar);
        lista.add(luigi);

        CombatTeam time1 = new CombatTeam(2, lista, cesar, zonaNorte);

        Sensor sensorMercado = new Sensor(15.6f, 18.4f, SensorStatus.OPERATIONAL, "Sensor Mercado");

        SensorRead leituraSensorMercado01 = new SensorRead(15.5f, LocalDateTime.now(), sensorMercado);

        FireSpot localMercado01 = new FireSpot(LocalDate.now(), LocalDate.now(), "Treta do nada", "Em conflito", Identification.HUMAN, Intensity.HIGH, lista, zonaNorte, sensorMercado);

        Image mercado1 = new Image("Imagem Um mercado", LocalDateTime.now(), "satelite01", localMercado01);

        System.out.println(cesar.toString());
        System.out.println(luigi.toString());
        System.out.println(zonaNorte.toString());
        System.out.println(time1.toString());
        System.out.println(sensorMercado.toString());
        System.out.println(leituraSensorMercado01.toString());
        System.out.println(localMercado01.toString());
        System.out.println(mercado1.toString());
    }
}
