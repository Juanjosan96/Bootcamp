import org.springframework.cloud.netflix.eureka.server.EurekaServerInitializerConfiguration;

import com.nttdata.bootcamp.eurekaservice.EurekaServiceApplication;

public class main {

	@EnableEurekaServer
	@SpringBootApplication
	public static void main(String[] args) {
		SpringAppliction.run(EurekaServiceApplication.class, args);

	}

}
